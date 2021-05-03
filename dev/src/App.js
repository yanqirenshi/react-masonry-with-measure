import Pool from './libs/index.js';

const data = [
    { label: 'XXX-01', col: 1 },
    { label: 'XXX-02', col: 2 },
    { label: 'XXX-03', col: 1 },
    { label: 'XXX-04', col: 1 },
    { label: 'XXX-05', col: 1 },
    { label: 'XXX-06', col: 1 },
    { label: 'XXX-07', col: 1 },
    { label: 'XXX-08', col: 1 },
    { label: 'XXX-09', col: 1 },
    { label: 'XXX-10', col: 1 },
    { label: 'XXX-11', col: 1 },
    { label: 'XXX-12', col: 1 },
    { label: 'XXX-13', col: 1 },
    { label: 'XXX-14', col: 1 },
    { label: 'XXX-15', col: 1 },
    { label: 'XXX-16', col: 1 },
    { label: 'XXX-17', col: 1 },
];

export default function App() {
    const item_class = 'pool-item';
    const options = {
        columnWidth: 100,
        itemSelector: `.${item_class}`,
        gutter: 10,
        itemClass: item_class, // original parameter
    };

    return (
        <div style={{width:'100%'}}>
          <Pool options={options}>
            {data.map((d,i)=>{
                console.log(d);

                const card_style = {
                    width: d.col * 100 + (d.col - 1) * 10,
                    height: 200,
                    background: '#fff',
                    marginBottom: 10,
                };

                return (
                    <div key={i} className="pool-item" style={card_style}>
                      {d.label}
                    </div>
                );
            })}
          </Pool>
        </div>
    );
}
