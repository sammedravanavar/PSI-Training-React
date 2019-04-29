describe("use setup/teardown",()=>{
    var arr = [];
    beforeEach(()=>{
        //initialization !
        arr = [10,20,30];
        console.log("Within before each")
    })
    afterEach(function(){
        console.log("Within after each")
    })
    beforeAll(()=>{
        console.log("Within before all")
    })
    afterAll(()=>{
        console.log("Within afterall")
    })
    it('use setup and tear down methods',function(){
        expect(arr).toContain(20);
    })
    xit('length of an array',function(){
        expect(arr.length).toBe(3);
    })
    // it('element present in an object',function(){
    //     expect(3).to
    // })
})