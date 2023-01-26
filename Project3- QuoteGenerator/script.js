function generate(){
    var quotes= {
        "-Nelson Mandela": '"The greatest glory in living lies not in never falling, but in rising every time we fall."',
        "-James Cameron": '"If you set your goals ridiculously high and it is a failure, you will fail above everyone else success."',
        "-Franklin D. Roosevelt": '"When you reach the end of your rope, tie a knot in it and hang on."'
    }

    var authors= Object.keys(quotes);

    var author= authors[Math.floor(Math.random() * authors.length)];

    var quote= quotes[author];

    document.getElementById("quote").innerHTML= quote;
    document.getElementById("author").innerHTML= author;
}