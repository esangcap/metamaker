document.addEventListener('DOMContentLoaded', function() {
    // by default, the submit button is disabled
    document.querySelector('#submit').disabled = true;

    document.querySelector('#meta').onkeyup = function() {
        // enable the submit button if the task is not empty
        if (document.querySelector('#meta').value.length > 0) {
            document.querySelector('#submit').disabled = false;
        } else {
            document.querySelector('#submit').disabled = true;
        }      
    }
    document.querySelector('form').onsubmit = () => {
         
        const meta = document.querySelector('#meta').value;               
        const meto = document.querySelector('#meto').value;
        const p =  document.createElement('p');
        p.innerHTML = meta + "::" + meto + "--";
        document.querySelector('#metas').append(p);                
        document.querySelector('#meta').value = '';
        document.querySelector('#meto').value = '';                               
        document.querySelector('#submit').disabled = true;
        return false;                                      
    }           
    
    
    //copy to clipboard and delete last 2 characters of last p
    document.querySelector('#kopya').onclick = () => {
        const metas = document.querySelectorAll('#metas p');
        let text = '';
        metas.forEach(meta => {
            text += meta.innerHTML;
        });
        navigator.clipboard.writeText(text.slice(0, -2)).then(() => {                                      
            document.querySelector('#kopya').innerHTML = 'Copied!';
            alert('Copied!'); 
        });                
    }
    //on submit pointer to the first input
    document.querySelector('#submit').onclick = () => {
        document.querySelector('#meta').focus();
    }
    //on click clear all p
    document.querySelector('#clear').onclick = () => {
        const metas = document.querySelectorAll('#metas p');
        metas.forEach(meta => {
            meta.remove();
        });
    }
    //on click undo last p
    document.querySelector('#undo').onclick = () => {
        const metas = document.querySelectorAll('#metas p');
        metas[metas.length - 1].remove();
    }
    // create keyboard shortcut for #undo button
    document.addEventListener('keydown', function(e) {
        if (e.keyCode == 90 && e.ctrlKey) {
            document.querySelector('#undo').click();
        }
    });
    // create keyboard shortcut for #kopya button
    document.addEventListener('keydown', function(e) {
        if (e.keyCode == 67 && e.ctrlKey) {
            document.querySelector('#kopya').click();
        }
    });
    // create keyboard shortcut for #clear button
    document.addEventListener('keydown', function(e) {
        if (e.keyCode == 88 && e.ctrlKey) {
            document.querySelector('#clear').click();
        }
    });  
});