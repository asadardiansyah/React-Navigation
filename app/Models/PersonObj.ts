export default class PersonObj {
    name: string;
    description: string;

    constructor(
        name='Nama Lengkap',
        description='React Native is inspired by React, so the basic idea of the information flow is similar. The flow in React is one-directional. We maintain a hierarchy of components, in which each component depends only on its parent and its own internal state. We do this with '
    ) {
        this.name = name
        this.description = description
    }
}