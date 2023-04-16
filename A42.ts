function make_great(magicians: string[]): string[] {
    const great_magicians: string[] = [];
  
    for (const magician of magicians) {
      great_magicians.push(`${magician} the Great`);
    }
  
    return great_magicians;
  }
  
  const magicians = ['Harry Houdini', 'David Blaine', 'Penn Jillette', 'Teller', 'Dynamo'];
  
  const great_magicians: string[] = make_great(magicians);
  
  function show_magicians(magicians: string[]): void {
    for (const magician of magicians) {
      console.log(magician);
    }
  }
  
  show_magicians(great_magicians);
  