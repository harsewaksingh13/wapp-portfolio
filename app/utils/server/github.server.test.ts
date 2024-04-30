import { fetchContents } from "./github.server"


describe('Github  apis', () => {
    describe('github contents gives valid response', () => {
        it(`it returns json array`, async () => {
            let response = await fetchContents()
            expect(response != undefined)
            if (response) {
                expect(response.status == 200)
                let json = response.text() || ""
                expect(JSON.parse(await json))
            }
        })
    })
})