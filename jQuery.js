//pitanja zajedno sa odgovorima i tacnim odgovorom koja ce se iskoristiti u kvizu
var svaPitanja = [{ //1
        pitanje: "Koja tvrdnja je tačna?",
        odgovori: ["jQuery je JSON biblioteka.", "jQuery je JavaScript biblioteka."],
        tacanOdgovor: "jQuery je JavaScript biblioteka."
    }, {//2
        pitanje: "Koristi li jQuery CSS selektore?",
        odgovori: ["Da", "Ne"],
        tacanOdgovor: "Da"
    }, {//3
        pitanje: "Koji znak koristi jQuery kao skraćenicu za jQuery?",
        odgovori: ["znak ?", "znak $", "znak %"],
        tacanOdgovor: "znak $"
    }, { //4
        pitanje: "Šta selektuje ovaj selektor: $('div')?",
        odgovori: ["Sve div elemente", "Samo prvi div element"],
        tacanOdgovor: 'Sve div elemente'
    }, {//5
        pitanje: "Da li je moguće koristiti jQuery zajedno sa AJAX-om?",
        odgovori: ["Da", "Ne"],
        tacanOdgovor: "Da"
    },{ //6
        pitanje: "Koja jQuery metoda se koristi kako bi se sakrili selektovani elementi?",
        odgovori: ["visible(false)", "display(none)", "hidden()","hide()"],
        tacanOdgovor: "hide()"
    },
    { //7
        pitanje: "Koja jQuery metoda se koristi kako bi se uklonili selektovani elementi?",
        odgovori: ["remove()", "detach()", "Obje navedene metode"],
        tacanOdgovor: "Obje navedene metode"
    },
    { //8
        pitanje: "Koja jQuery metoda vraća direktnog roditelja selektovanog elementa?",
        odgovori: ["ancestor()", "parents()", "ancestors()", "parent()"],
        tacanOdgovor: "parent()"
    },{ //9
        pitanje: "Koji je ispravan način da se podesi boja pozadine na crvenu svih p elemenata?",
        odgovori: ["$('p').style('background-color', 'red')", "$('p').css('background-color', 'red')",
                   "$('p').manipulate('background-color', 'red')", "$('p').layout('background-color', 'red')"],
        tacanOdgovor: "$('p').css('background-color', 'red')"
    },{ //10
        pitanje: "Koja jQuery metoda se koristi za postavljanje jedne ili više osobina selektovanih elemenata?",
        odgovori: ["css()", "html()", "style()"],
        tacanOdgovor: "css()"
    },{ //11
        pitanje: "Koje elemente selektuje selektor $('div.odg')?",
        odgovori: ["Sve div elemente sa klasom odg", "Prvi div element sa klasom odg", 
                   "Sve div elemente sa id-om odg", "Prvi div element sa id-om odg"],
        tacanOdgovor: "Sve div elemente sa klasom odg"
    }, { //12
        pitanje: "Koja metoda se ponaša kao eksplicitni iterator?",
        odgovori: ["each()", "hover()", "all()", "toggle()"],
        tacanOdgovor: "each()"
    },{ //13
        pitanje: "Koji je tip datoteke jQuery?",
        odgovori: [".XML", ".js", ".lib", ".html"],
        tacanOdgovor: ".js"
    },{ //14
        pitanje: "Šta znači AHAH?",
        odgovori: ["Asynchronous HTTP and HTML", "Asynchronous HTTP and HTTPs",
                   "Alternate HTTP and HTML", "Nijedno od navedenog"],
        tacanOdgovor: "Asynchronous HTTP and HTML"
    },{ //15
        pitanje: "Koja se metoda koristi za kopiranje nekog elementa?",
        odgovori: ["clone()", "copy()", "coping()", "Nijedno od navedenog"],
        tacanOdgovor: "clone()"
    },{ //16
        pitanje: "each() je pogodniji oblik za koju petlju?",
        odgovori: ["do while", "for", "for each", "Nijedno od navedenog"],
        tacanOdgovor: "for"
    }, { //17
        pitanje: "Šta vraća size() metoda?",
        odgovori: ["Broj elemenata u objektu", "Broj varijabli u objektu", "Oboje", "Nijedno od navedenog"],
        tacanOdgovor: "Broj elemenata u objektu"
    }, { //18
        pitanje: "Šta je brže?",
        odgovori: ["jQuery.size()", "jQuery.length"],
        tacanOdgovor: "jQuery.length"
    },{ //19
        pitanje: "Koji prefiks imaju klase prilikom selektovanja?",
        odgovori: ["$", "%", ".","#"],
        tacanOdgovor: "."
    },{ //20
        pitanje: "Koliko vrsta selektora postoji u jQuery-ju?",
        odgovori: ["1", "2", "3", "4"],
        tacanOdgovor: "3"
    }
]

 //deklaracija globalnih varijabli
 //redni broj pitanja
var i = 0;

//ukupan rezultat
var rez = 0;

//brojac koji omogucava jedan klik na odgovore određenog pitanja
var brojac = [];
function resetBrojac(){
    for (var k=0; k<20; k++){
        brojac[k]=0;
    }    
}
function popuniBrojac(){
    for (var k=0; k<20; k++){
        brojac[k]=1;
    }    
}

//niz u koji se spremaju odgovori korisnika
var odgovoriKorisnika = [];

//funkcija koja resetuje odgovore korisnika na nedefinisano
function resetOdgovoriKor(){
    for (var k=0; k<20;k++){
        odgovoriKorisnika[k]= undefined;
    }
}

//pocetno vrijeme za tajmer
var time = 0;

//funkcija kojom se prikazuje odredjeno pitanje i ponudjeni odgovori, 'a' je redni broj pitanja
function prikaziPitanje(a){
    //isprazni kontejner sa odgovorima (ukoliko se tu nalaze prethodni odgovori)
    $('#odgovori').empty();

    //varijabla u koju je smjesteno pitanje
    var q = svaPitanja[a].pitanje;

    //varijabla u koju je smjestena duzina polja odgovori za odredjeno pitanje (broj odgovora za odredjeno pitanje)
    var duzina = svaPitanja[a].odgovori.length;

    //skrivanje kontejnera pitanja koji sadrzi i pitanje i ponudjene odgovore
    $('#pitanja').hide();

    //ispis tekstualnog dijela pitanja
    $('#pitanje').text(q);

    //petlja koja omogucava ispis svih ponudjenih odgovora jednog pitanja
    for (var j=0; j < duzina; j++){
        //varijabla u kojoj je smjesten jedan odredjeni odgovor
        var o = svaPitanja[a].odgovori[j];

        if (o === svaPitanja[a].tacanOdgovor){ 
            //ukoliko je u pitanju tacan odgovor na pitanje, daje mu id tacno
            $('#odgovori').append('<div class = "odg" id= "tacno"><a href="#">'+ o + '</a></div>');
            
        }
        else{
            //u drugom slucaju samo dodaje odgovore u kontejner koji sadrži sve odgovore pod klasom odg
            $('#odgovori').append('<div class= "odg"><a href="#">'+ o + '</a></div>');
        }
        
    }
    //dodaje na pocetak pitanja redni broj pitanja
    $('#pitanje').prepend(a+1 + '. ');

    //fade in efekat prikazivanja pitanja i ponudjenih odgovora
    $('#pitanja').fadeIn(500);
}


$(document).ready(function(){

    //incijalizacija brojaca
    resetBrojac();

    //skrivanje next dugmeta prilikom load-a stranice
    $('#next').hide();
    
    //skrivanje tracker bloka
    $('#tracker').hide();

    var vrijeme;

    //skrivanje restart dugmeta prilikom load-a stranice
    $('#restart').hide();

    //start - klik 
    $('#start').click(function(){

       //prikaz kontejnera gdje se nalazi tajmer
        $('#timer').show();

        //ispis vremena
        $('#timer').html('Vrijeme: ' + time );

        //postavlja interval tako da se svakih 1000ms (1s) ispisuje broj sekundi koje su prosle od pokretanja kviza
        vrijeme = setInterval(function(){
            $('#timer').html('Vrijeme: ' + time++);
        }, 1000);

        //skrivanje dugmeta start nakon klika
       $(this).hide();

       //nakon klika na start sakriva se uvodni tekst
       $('#uvod').hide();

       //pozivanje funkcije za prikaz odredjenog pitanja(prvog pitanja u ovom slucaju)
       prikaziPitanje(i);

       //redni broj pitanja se povecava za 1
       i++;

       //u kontejner rezultat se ispisuje trenutni rezultat koji je u ovom slucaju 0
       $('#rezultat').html('POENI: '+ rez);

       //prikaz dugmeta next za prelaz na sljedece pitanje
       $('#next').show();
   })

   //next - klik
   $('#next').click(function(){    
        
       //ispituje da li je broj pitanja manji od ukupnog broja svih pitanja
        if ( i < svaPitanja.length){
            //ako jest prikazuje se pitanje zajedno sa ponudjenim odgovorima
            prikaziPitanje(i);

            //broj pitanja se povecava za jedan
            i++;
        }
        else{
            //ukoliko je i jednako broju pitanja, poziva se funkcija koja popuni brojac klikova kako bi se
            //sprijecilo naknadno klikanje na neka pitanja
            popuniBrojac();
            
            //next dugme se sakrije
            $(this).hide();

            //kontejner pitanja se sakrije
            $('#pitanja').hide();

            //restart dugme se prikaze sa fade in efektom
            $('#restart').fadeIn(500);

            //računa se procenat tačnih odgovora
            var ukupno = (rez*100)/20;

            //ispisuje se broj poena i procenat
            $('#rezultat').html('POENI: '+ rez + '/20');
            $('#kraj').html('Uradili ste ' + ukupno + '% kviza.');

            //zaustavlja se tajmera (setInterval funkcija ranije postavljena)
            clearInterval(vrijeme);
            
            //prikaze se tracker koji je skup obojenih kockica koji oznacavaju odgovore na pitanja
            $('#tracker').fadeIn(500);

            //dodavanje poruke u kontejner sa id-om kraj
            if (ukupno >= 75){
                $('#kraj').append('</br>Čestitamo! Jedan ste od boljih poznavalaca jQuery-ja.');
            }
            else if (ukupno <75 && ukupno >= 40){
                $('#kraj').append('</br>Solidno poznajete jQuery, ali ima mjesta za napredak.');
            }
            else{
                $('#kraj').append('</br>Imate još mnogo za naučiti.');
            }

            //isprazni se kontejner sa odgovorima
            $('#odgovori').empty();

            
        }   
    }) 

    
    //odgovori - klik
    $("#odgovori").on("click", ".odg", function(){
        
        //ako je redni broj pitanja minus 1 manji od ukupnog broja pitanja...
        if(i-1<svaPitanja.length){        
            //...formira se varijabla u kojoj je smjesten tacan odgovor
            var tacno = svaPitanja[i-1].tacanOdgovor;

            //tekstualni dio kliknutog odgovora se sprema u nizu odgovora korisnika
            odgovoriKorisnika[i-1] = $(this).text();
        
            //ispituje se da li je brojac broja klikova odredjenog pitanja jednak nuli
            if(brojac[i-1] === 0)
            {
                //ako jest, provjerava se da li je tekstualni dio kliknutog odgovora jednak tacnom odgovoru
                if ($(this).text() == tacno)
                {
                    //ako jest, rezultat se poveca za jedan
                    rez++;

                    //zatim se pronađe kockica u bloku tracker s odgovarajućim brojem(rednim brojem pitanja) te se oboji u zelenu boju
                    $('#tracker').find('.kockica.k-'+ (i)).css('background-color', 'var(--right)');
                                
                    //mijenja se boja pozadine trenutnog(tacnog) odgovora u zelenu boju
                    $(this).css('background-color', 'var(--right)');
                }
                else{
                    //ako nije, boja pozadine se mijenja u crvenu boju
                    $(this).css('background-color', 'var(--wrong)');

                    //pronađe se odgovarajuća kockica u bloku trackers te se oboji u crveno
                    $('#tracker').find('.kockica.k-'+ (i)).css('background-color', 'var(--wrong)');

                    //pronadje tacan odgovor u odgovorima, te oboji pozadinu u zeleno
                    $('#odgovori').find('#tacno').css('background-color', 'var(--right)');
                    
                }
                //rezultat se u svakom slucaju ispisuje, html funkcija prepise novi sadrzaj preko starog sadrzaja
                $('#rezultat').html('POENI: '+ rez);
        
                //brojac za broj klikova na odgovore se povecava
                brojac[i-1]++;

            }   
            //ako je redni broj pitanja jednak ukupnom broju pitanja (jer se i++ desava nakon svakog prikaza pitanja)... 
            if(i==svaPitanja.length){
                //...popuni se brojac broja klikova kako bi se sprijecilo
                popuniBrojac();   
                //te se opet povecava redni broj pitanja kako ne bi prosla varijabla i u dijelovima gdje se trazi i-1
                i++;
            }
        }
        else
        {
            //...u drugom slucaju se poveca brojac broja klikova
            popuniBrojac();
        }
        
    })

    //restart - klik
    $('#restart').on("click", function()
    {
        //blok s pitanjima i odgovorima se sakrije jer postoji mogucnost da je prethodno bio otvorena
        //prilikom klikanja na kockice u tracker bloku
        $('#pitanja').hide();

        //restart dugme se sakrije
        $('#restart').hide();

        //prikazuje se start dugme fade in efektom
        $('#start').fadeIn(500);

        //ponovno prikazivanje -slide down uvodnog teksta pri pocinjanju nove igre
        $('#uvod').fadeIn(500);

        //restartuje se rezultat, broj pitanja i brojac broja klikova na odgovore
        rez = 0;
        i = 0;
        resetBrojac();

        //resetuju se i odgovori korisnika
        resetOdgovoriKor();

        //blok sa kockicama se također sakrije, te se kockice resetuju na svoju prvobitnu boju 
        $('#tracker').hide();
        $('.kockica').css('background', 'var(--secondary)');        

        //kontejner koji sadrzi rezultat se isprazni
        $('#rezultat').empty();

        //kontejner krajnje poruke se također isprazni
        $('#kraj').empty();

        //kontejner sa tajmerom se sakriva i tajmer se resetuje
        $('#timer').hide();
        time = 0;
    })   

    //na kraju kviza se pojavi blok tracker u kome se nalaze kockice
    //ukoliko se klikne na neku od kockica desi se sljedece
    $('.kockica').on('click', function(){
        //u varijablu se stavi broj iz kockice koji ujedno oznacava i redni broj pitanja i odgovora koji se zele pregledati
        var broj= parseInt($(this).text())-1;

        //prikaze se odredjeno pitanje uz ranije napravljenu funkciju
        prikaziPitanje(broj);

        //u varijablu se stavi i odgovor korisnika na to pitanje
        var odgKor = odgovoriKorisnika[broj];

        //ako je korisnik odgovorio na to pitanje...
        if(odgKor != undefined){
            //...tacan odgovor se oboji u zelenu boju
            $('#tacno').css('background', 'var(--right)');

            //ako se korisnikov odgovor razlikuje od tacnog odgovora...
            if(odgKor!=svaPitanja[broj].tacanOdgovor){
                //...u bloku odgovori se trazi odgovor sa korisnikovim odgovorom, te se on oboji u crvenu boju
                $('#odgovori').find('.odg:contains(' +odgKor+')').css('background', 'var(--wrong)');
            }
        }
        //blok sa pitanjima se ponovo pokaze fade in efektom
        $('#pitanja').fadeIn(500);
    })

    //hover dugmeta
    $('.btn a').hover( function(){
        //ulazna funkcija prilikom hovera je promjena boje u plavu
        $(this).css('background', 'var(--primary)');
    }, function(){
        //a izlazna, nakon sto se skloni mis sa dugmeta, jeste vracanje boje u sivu
        $(this).css('background', 'var(--secondary)');
    })
     
});