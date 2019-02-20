function DNAtoRNA(dna) {
  // create a function which returns an RNA sequence from the given DNA sequence
  var rna = '';
  for (var i = 0; i < dna.length; i++) {
    if (dna.charAt(i) == 'T') {
      rna += 'U';
    }
    else {
      rna += dna.charAt(i);
    }    
  }
  return rna;
}