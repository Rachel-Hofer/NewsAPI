import React from 'react';
import '../App.css';

const NewSingle = ({ item }) => (
    <div className="col s4">
        <div className="card">
            <div className="card-image waves-effect waves-block waves-light">
                <img src={item.urlToImage} alt={item.title} />
            </div>
            <div className="card-content">
                <span className="card-title activator grey-text text-darken-4">
                    {item.title}
                    <i className="material-icons right">more_vert</i>
                </span>
                <p><a href={item.url} target="_blank">Full Article</a></p>
            </div>
            <div className="card-reveal">
                <span className="card-title grey-text text-darken-4">
                    {item.title}
                    <i className="material-icons right">close</i>
                </span>
                <p>{item.description}</p>
            </div>
        </div>

    </div>
);

export default NewSingle;
