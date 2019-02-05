const additionInfKeys = ['Доп. Инфа 1',
                     'Доп. Инфа 2']

module.exports = class Model {
    constructor(data) {
        this.id = data['id']
        this.name = data['Name']
        this.profession = data['Профессия']
        this.additions = []
        additionInfKeys.forEach(additionKey => {
                           this.additions.push(new Addition(data[additionKey]))
                           })
    }
}

class Addition {
	constructor(inf) {
		this.inf = inf
	}
}
