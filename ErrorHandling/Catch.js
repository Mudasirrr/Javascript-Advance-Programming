// try catch {}
function fail () {
    // run this code
    try {
        console.log('this works')
        throw new Error('opppsssiee!')
    } catch (error) {
        console.log('errrorrrrrr', error)
    } finally {
        console.log('still good!')
    }
}

fail()