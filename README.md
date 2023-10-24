Impostazione iniziale, scelta di avere una singola section per ogni effettiva section sulla pagina web, così da modificare tutto il necessario più facilmente.


Header: 
1. Hover sulla nav, con menù a tendina su games (hover a scelta tra intero div o solo scritta).
2. Hover sul bottone "live streaming".

Section Explore:
1. Hover sul bottone "explore games".

Section Plan:
1. Hover sul bottone "plan now".

Section Matches:
1. Le card dei match sono components, ciclate con un v-for che prende i dati dallo store, in modo da essere dinamiche.
2. Hover sul bottone "view all matches".

Facts:
1. Dati stampati dinamicamente con un v-for, anch'esso prende i dati dallo store.

Section Stream:
Niente da segnalare

Section Feedbacks:
1. Recensioni stampate dinamicamente con un v-for, dati ottenuti dallo store.
2. Le card sono inserite in uno slider che funziona in maniera touchscreen.
3. Le stelle nelle card sono stampate in maniera dinamica, tramite una funzione che legge il valore del voto e stampa tante stelle piene quanto è alto il voto (espresso nell'array in numeri interi)

Sezione Articles:
1. Articoli ottenuti dallo store.
2. A sinistra stampiamo un articolo a scelta dall'array
3. A destra, dopo aver utilizzato una funzione che filtra l'array togliendo l'articolo di sinistra cicliamo i rimanenti articoli.
4. La funzione filtra l'array tramite il metodo "filter()" e si avvale dell'ID univoco di ogni oggetto dell'array.

Footer
1. Subscribe newsletter, div in position che si tira fuori dal footer verso l'alto.
2. Hover su tutti gli li delle prime 3 liste.
3. Hover sui bollini dei social.