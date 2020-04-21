import firebase from 'firebase'

class Firebase {
    constructor() {
        this.init()
        this.checkAuth()
    }

    init = () => {
        if (!firebase.apps.length) {
            firebase.initializeApp({
                apiKey: "AIzaSyDxm07KTRg70BpqqV2ekYh9DHFWLNv7VQk",
                authDomain: "chat-b8ec0.firebaseapp.com",
                databaseURL: "https://chat-b8ec0.firebaseio.com",
                projectId: "chat-b8ec0",
                storageBucket: "chat-b8ec0.appspot.com",
                messagingSenderId: "693959508793",
                appId: "1:693959508793:web:1dac6733456f9207251ee8",
                measurementId: "G-K3XDBSQHXH"
            })
        }
    }
    checkAuth = () => {
        firebase.auth().onAuthStateChanged(user => {
            if (!user) {
                firebase.auth().signInAnonymously()
            }
        })
    }

    send = messages => {
        messages.forEach(item => {
            const message = {
                text: item.text,
                timestamp: firebase.database.ServerValue.TIMESTAMP,
                user: item.user
            }

            this.db.push(message)
        })
    }
    parse = message => {
        const { user, text, timestamp } = message.val()
        const { key: _id} = message
        const createdAt = new Date(timestamp)

        return{
            _id,
            createdAt,
            text,
            user,
        }
    }

    get = callback => {
        this.db.on('child_added', snapshot => callback(this.parse(snapshot)))
    }

    off() {
        this.db.off()
    }

    get db() {
        return firebase.database().ref('messages')
    }

    get uid() {
        return (firebase.auth().currentUser || {}).uid
    }
}

export default new Firebase()