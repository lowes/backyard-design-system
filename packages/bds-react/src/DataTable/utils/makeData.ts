import namor from 'namor'

const range = (len) => {
    const arr = []
    for (let i = 0; i < len; i += 1) {
        arr.push(i)
    }
    return arr
}

const newPerson = () => {
    const statusChance = Math.random()
    return {
        firstName: typeof namor.generate === 'function'
            ? namor.generate({ words: 1, numbers: 0, saltLength: 0, subset: 'manly' })
            : 'First',
        lastName: typeof namor.generate === 'function'
            ? namor.generate({ words: 1, numbers: 0, saltLength: 0, subset: 'manly' })
            : 'Last',
        age: Math.floor(Math.random() * 30),
        visits: Math.floor(Math.random() * 100),
        progress: Math.floor(Math.random() * 100),
        status:
            statusChance > 0.66 ? 'relationship' : statusChance > 0.33 ? 'complicated' : 'single',
    }
}

export default function makeData(...lens) {
    const makeDataLevel = (depth = 0) => {
        const len = lens[depth]
        return range(len).map(() => newPerson())
    }

    return makeDataLevel()
}
