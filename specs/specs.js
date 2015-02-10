describe('anagram', function() {
  it("returns 'No anagrams found' if no anagrams are found", function() {
    expect(anagram("hi", ["no", "yes", "up", "down"])).to.equal("No anagrams found")
  });

  it("returns matching anagrams from the array of the word", function() {
    expect(anagram("arc", ["car", "dog", "cat", "cap", "hot"])).to.equal("Matches: car")
  });  
});

describe('checkArrays', function() {
  it("is true if the arrays match", function() {
    expect(checkArrays(["a", "c", "r"], ["a", "c","r"])).to.equal(true);
  });

  it("is false if the arrays dont match", function(){
    expect(checkArrays(["a", "c", "r"], ["b","t","r"])).to.equal(false);
  });
});
