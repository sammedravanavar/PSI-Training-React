xdescribe("A suite is just a function", function() {
    var a;
  
    it("and so is a spec", function() {
      a = true;
  
      expect(a).toBe(true);
    });
});

xdescribe("basic matchers", () => {
    xit("use of toBe === ", () =>{
        expect(10).toBe('10')
    })

    it('use of toEqual === + object inspection', () => {
        // expect(60).toEqual(60)
        expect({name:"Sapient"}).toEqual({name:'Sapient'})
    })

    it("use of toMatch: regex", () => {
        expect('Sapient is a Company').toMatch(/company/i)
    })

    it("use of toBeDefined", () => {
        var obj = {};
        expect(obj.AnyDynamicProperty).not.toBeDefined();
    })
    xit('',()=>{
        expect(["Microsoft","Accenture"]).toContain("Sapient")
    })
    ThisThrowsAnError = () => {
        throw new TypeError('My Exception !')
    }
    it('use of toThrowError',()=>{
        expect(ThisThrowsAnError).toThrowError(TypeError);
    })
})