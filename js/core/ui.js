export const UI = {
    state: {
        modal: {
            type: null,
            isOpen: false,
            data: null
        }
    },

    listeners: new Set(),

    setState(newState) {
        this.state = {
            ...this.state,
            ...newState
        }

        this.notify()
    },

    subscribe(fn) {
        this.listeners.add(fn)
        return () => this.listeners.delete(fn)
    },

    notify() {
        this.listeners.forEach(fn => fn(this.state))
    }
}