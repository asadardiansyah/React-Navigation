import {AsyncStorage} from 'react-native';

export default class PersonObj {
    name: string;
    description: string;
    dob: string;
    address: string;
    motto: string;
    roles: string;

    constructor(
        name='Nama Lengkap',
        description='React Native is inspired by React, so the basic idea of the information flow is similar. The flow in React is one-directional. We maintain a hierarchy of components, in which each component depends only on its parent and its own internal state. We do this with ',
        dob='15 Februari 1995',
        address='Gresik, East Java',
        roles='iOS Developer',
        motto='Be kind, be brave'
    ) {
        this.name = name
        this.description = description
        this.dob = dob
        this.address = address
        this.roles = roles
        this.motto = motto
    }
}