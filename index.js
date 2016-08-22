/** 
 * Class to implement a note taking application
 * @constructor {string} author note author
 * @constructor {Array.<string>} notes list of notes to be processed
 * @param {string} author parameter passed into constructor
 */
//function NotesApplication(author) { 
var NotesApplication = function (author) {      
        if(typeof author === 'string') {
            this.author = author; 
            this.notes = [];             
        }
        else {
            console.log('Author must be a string'); 
        }

/**
 * Takes the note content as parameter and returns an array including the
 * note content
 * @param {string} note_content adds note content to notes array
 */
this.create = function(note_content) {
    	if (typeof  note_content === 'string') {           
        this.notes.push(note_content);
        return 'Success';  
        }
        else {
           return 'Note content must be a string';    
        }
}

/**
 * lists out each of the notes in the notes list in the specified format. 
 * @return {string} returns the respective index of each of the item in the array, the note content and the author 
 */
this.listNotes = function() {
        for (let note_id = 0; note_id <= this.notes.length - 1; note_id++) {
            console.log(`Note ID: [${note_id}]\n${this.notes[note_id]}\n\nBy Author [${this.author}]`);           
        }        
}
    
/**
 * takes the index of the note in the notes list and returns the content of that note as a string.
 * @param {number} note_id index of the note 
 * @return {string} returns the content of the note
 */ 
this.get = function(note_id) {   
        if (typeof  note_id === 'number' && note_id <= this.notes.length) {
            console.log(this.notes[note_id]);            
        }
        else {
           console.log('Note index must be a string');  
        }
 }
 
/**
 * take a search string  and returns all the notes with that text within it 
 * in the specified format
 * @param {string} search_text search string 
 * @return {array} returns notes with search string in specified format
 */ 
this.search = function(search_text) {
        if (typeof  search_text === 'string') {
            console.log(`Showing results for search '${search_text}'`);
            for (let note_id = 0; note_id < this.notes.length; note_id++ ) {
                  if (this.notes[note_id].indexOf(search_text) >= 0) {
                       var result = (`Note ID: [${note_id}]\n${this.notes[note_id]}\n\nBy Author [${this.author}]`)
                       console.log(result);
                  }                
            }
        }
        else {
           console.log('Search text must be a string');
        } 
}

/**
 * deletes the note at the index note_id of the notes list
 * @param {number} note_id index of the note 
 */
this.delete = function(note_id) {
        if (typeof  note_id === 'number') {
           this.notes.splice(note_id, 1);
        }
        else {
           console.log('Note index must be a number');  
        } 
}
  
/**
 * replaces the content in the note at note_id with new_content.
 * @param {number} note_id index of the note 
 * @param {string} new_content replacement note
 */
this.edit = function(note_id, new_content) {
        if (typeof  note_id === 'number' && typeof new_content === 'string') {
           this.notes[note_id] = new_content;
           console.log(this.notes);
        }
        else {
           console.log('Wrong type of input entered');
        } 
 }
}

module.exports = NotesApplication; 
