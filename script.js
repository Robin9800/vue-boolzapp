const contacts = [
    {
        name: 'Michele',
        avatar: '_1',
        visible: true,
        messages: [
            {
                date: '15:30',
                message: 'Hai portato a spasso il cane?',
                status: 'sent'
            },
            {
                date: '15:50',
                message: 'Ricordati di stendere i panni',
                status: 'sent'
            },
            {
                date: '16:15',
                message: 'Tutto fatto!',
                status: 'received'
            }
        ],
    },
    {
        name: 'Fabio',
        avatar: '_2',
        visible: true,
        messages: [
            {
                date: '16:30',
                message: 'Ciao come stai?',
                status: 'sent'
            },
            {
                date: '16:30',
                message: 'Bene grazie! Stasera ci vediamo?',
                status: 'received'
            },
            {
                date: '16:35',
                message: 'Mi piacerebbe ma devo andare a fare la spesa.',
                status: 'sent'
            }
        ],
    },
    {
        name: 'Samuele',
        avatar: '_3',
        visible: true,
        messages: [
            {
                date: '10:10',
                message: 'La Marianna va in campagna',
                status: 'received'
            },
            {
                date: '10:20',
                message: 'Sicuro di non aver sbagliato chat?',
                status: 'sent'
            },
            {
                date: '16:15',
                message: 'Ah scusa!',
                status: 'received'
            }
        ],
    },
    {
        name: 'Alessandro B.',
        avatar: '_4',
        visible: true,
        messages: [
            {
                date: '15:30',
                message: 'Lo sai che ha aperto una nuova pizzeria?',
                status: 'sent'
            },
            {
                date: '15:50',
                message: 'Si, ma preferirei andare al cinema',
                status: 'received'
            }
        ],
    },
    {
        name: 'Alessandro L.',
        avatar: '_5',
        visible: true,
        messages: [
            {
                date: '15:30',
                message: 'Ricordati di chiamare la nonna',
                status: 'sent'
            },
            {
                date: '15:50',
                message: 'Va bene, stasera la sento',
                status: 'received'
            }
        ],
    },
    {
        name: 'Claudia',
        avatar: '_6',
        visible: true,
        messages: [
            {
                date: '15:30',
                message: 'Ciao Claudia, hai novità?',
                status: 'sent'
            },
            {
                date: '15:50',
                message: 'Non ancora',
                status: 'received'
            },
            {
                date: '15:51',
                message: 'Nessuna nuova, buona nuova',
                status: 'sent'
            }
        ],
    },
    {
        name: 'Federico',
        avatar: '_7',
        visible: true,
        messages: [
            {
                date: '15:30',
                message: 'Fai gli auguri a Martina che è il suo compleanno!',
                status: 'sent'
            },
            {
                date: '15:50',
                message: 'Grazie per avermelo ricordato, le scrivo subito!',
                status: 'received'
            }
        ],
    },
    
]

const app = new Vue({
    el: '#root',
    data: {
        contacts: contacts,
        contactActive: contacts[0]
    },
    methods: {
        //Creo una funzione per far apparire in html l'ultimo messaggio
        getLastMessage(contact){
            const messages = contact.messages;
            const lastMessage = messages[messages.length-1].message;
            return lastMessage;
        },
        setContactActive(contact){
            this.contactActive = contact
        },
        //Creo una funzione per far apparire nella contact list l'ultima data
        getLastDate(contact){
            const messages = contact.messages;
            const lastDate = messages[messages.length-1].date;
            return lastDate;
        },
    }
})