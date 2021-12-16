import React from 'react';
import { FirstName, LastName } from './App';

const CompC = () => {
    return (
        <>
            <FirstName.Consumer>
                {(name) => {
                    return (
                        <LastName.Consumer>{(lname) => {
                            return (
                                <h1>
                                    My name is {name} { lname}
                                </h1>
                            );
                        }}
                        </LastName.Consumer>
                    );
                }}
            </FirstName.Consumer>
        </>)
};
export default CompC;