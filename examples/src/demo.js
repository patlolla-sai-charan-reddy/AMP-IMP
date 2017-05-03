import http from 'http';
import React, { PropTypes } from 'react';
import $ from "jquery"; //Importing the Jquery

import {
    StyleSheet,
    css,
} from 'aphrodite/no-important'; // Is very important to import no-important!
import RAMPT, {
    addScript, // Fancy way to append amp-scripts into document's head
    addMeta,
} from '../../lib'; // react-amp-template

// --- MODULAR-CSS ---
const style = StyleSheet.create({
    social: {padding: '10px'},
});

// --- REACT + CUSTOM-TAGS ---
const SampleApp = ({ value, location}) => {
    // --- CUSTOM-SCRIPTS ---
    addMeta([
        {type: 'meta', content: {content: 'something'}},
        {type: 'link', content: {rel: 'http://link'}},
    ]);

    const prId = "12512" //We can make it dynamic
    const url = "http://localhost:8000/prId=" + prId;; //window,location.href;
    const id = url.substring(url.lastIndexOf('/') + 1);
    const output = id.replace(/[a-zA-Z=]/g, '');

    return (
        <div>
            <h1>Hello {value}</h1>
            <hr />
            <h2>{output} took from prId</h2>
            <hr />
            <h2><a className="redirect" href={'//www.fitchratings.com/prId/' + output} target="_blank">Click Here</a>
            </h2>
        </div>
    );
};


//AJAX CALL --GET THE ID AND MAKE THE AJAX REQUEST-- GET AJAX CALL



export const startServer = (html) => {
    http.createServer((request, response) => {
        response.writeHeader(200, {'Content-Type': 'text/html'});
        response.write(html);
        response.end();
    })
        .listen(8000)
        .on('clientError', (err, socket) => {
            socket.end('HTTP/1.1 400 Bad Request\r\n\r\n');
        });
    console.log('Listening on port 8000');
};


const rampt = new RAMPT({
    ampValidations: true, // (default) validate the template with AMP Google tool.
    template: {
        head: {
            title: 'react-amp-sample',
            canonical: 'http://sample',
        },
    },
})

/**
 * renderStatic returns a promise which will be fulfilled
 * with a string that holds the whole HTML document ready to serve.
 * The promise will reject for any internal error.
 * Once done rendering, the promise's result will be served on port 8000.
 */
rampt
    .renderStatic(<SampleApp value="AMP!"/>)
    .then(startServer)
    .catch(console.error);
