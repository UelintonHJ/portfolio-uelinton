export const UI = {
    state: {
        modal: {
            type: null,
            isOpen: false,
            data: null
        }
    },

    listeners: new Set(),
    
    subscribe(listener) {
        this.listeners.add(listener)
        return () => this.listeners.delete(listener)
    },

    setState(newState) {
        this.state = {
            ...this.state,
            ...newState
        }

        this.notifyListeners();
    },

    notifyListeners() {
        this.listeners.forEach(listener => listener(this.state))
    }
}