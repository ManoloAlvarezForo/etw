// @flow
import React from 'react';

const PreachingForm = ({ preaching }) => {
    return (
        <div>
            <ul style={{ fontWeight: 'bold' }}>
                {
                    preaching.preachings.map((p, index) =>
                        <li key={index}>
                            <div>{p.day} - {p.date}</div>
                            <ul>
                                {
                                    p.preachingEvents.map((pe, index) => <li key={index}>{pe.time} {pe.preachingLead} {pe.moment} </li>)
                                }
                            </ul>
                        </li>
                    )
                }
            </ul>
        </div>
    )
}

export default PreachingForm;