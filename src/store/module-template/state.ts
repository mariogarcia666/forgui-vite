export interface ExampleStateInterface {
    prop: Boolean
}

function state(): ExampleStateInterface {
    return {
        prop: true
    }
}

export default state