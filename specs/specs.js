describe('anagram', function() {
  it("fails if the input is not a string of letters", function() {
    expect(anagram("$$&^")).to.equal("Please enter words");
  });
});
