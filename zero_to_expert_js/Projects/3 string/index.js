function getText() {
    // Get the textarea element by its id
    var textarea = document.getElementById('myTextarea');

    // Get the text entered by the user
    var text = textarea.value;

    // Display the text in a paragraph with id 'output'
    var output = document.getElementById('output');
    output.textContent = text;
    console.log(text);

    const iteamArr = text.split('\n');

    // iteamArr.forEach(element => {
    //     iteamArr.push(element.trim());
    // }); // (10) ['underscore_case', ' first_name', 'Some_Variable', ' calculate_AGE', 'delayed_departure', 'underscore_case', 'first_name', 'Some_Variable', 'calculate_AGE', 'delayed_departure']

    for(let i=0;i<iteamArr.length;i++){
        iteamArr[i] = iteamArr[i].trim();
    }
    
    console.log(iteamArr);
    
    // strings are immutable hence bellow code wa't work
    for(let i=0;i<iteamArr.length;i++){
        // this will work coz we are re assigning
        // iteamArr[i] = String(iteamArr[i][0]).toLocaleLowerCase() + iteamArr[i].substring(1);
        
        
        // iteamArr[i] = String(iteamArr[i][0]).toLocaleLowerCase() + iteamArr[i].substring(1);


        // below code
        // iteamArr[i][0] = String(iteamArr[i][0]).toLocaleLowerCase()
        //  + String(iteamArr[i][String(iteamArr[i]).indexOf('_')+1]).toUpperCase();
        // iteamArr[i] = String(iteamArr[i]).replace('_','');
        
        // console.log(iteamArr[i]);
        
        // console.log(String(iteamArr[i][0]).toLocaleLowerCase());

        // console.log(String(iteamArr[i][0]).toLocaleLowerCase());
        // // console.log(String(iteamArr[i]).indexOf('_')+1);
        // const se = String(iteamArr[i]).indexOf('_')+1;
        // console.log(String(iteamArr[i][se]).toUpperCase());


        // console.log(String(iteamArr[i][0]).toLocaleLowerCase() + String(iteamArr[i]).replace('_','') + String(iteamArr[i][se]).toUpperCase());
    }

    console.log('final:',iteamArr);




}


/*

underscore_case
 first_name
Some_Variable 
  calculate_AGE
delayed_departure

*/

// const textO = "underscore_case
//  first_name
// Some_Variable
//  calculate_AGE
// delayed_departure";