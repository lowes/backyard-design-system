import {
    ariaHidden,
    ariaHiddenSiblings,
    findIndexOf,
    getHiddenSiblings,
    handleContainer
} from './functions'

/**
 * Backyard React Modal Manager
 * 
 * Static state management for modals and containers for the modals.
 * Ensures proper styling and handling of single or multiple modals on page at given time.
 * 
 * Heavily based on Material-UI's ModalManager:
 * @see https://github.com/mui-org/material-ui/blob/master/packages/material-ui/src/Modal/ModalManager.js
 */
class ModalManager {
    constructor() {
        // Hold list of active modals being managed
        this.modals = []
        // Hold list of active containers being managed
        this.containers = []
    }

    /**
     * Add modal to container for styling and handling
     * 
     * @param {node} modal 
     * @param {node} container 
     */
    add(modal, container) {
        // Calculate current modal index
        let modalIndex = this.modals.indexOf(modal)
        if (modalIndex !== -1) {
            return modalIndex
        }

        modalIndex = this.modals.length

        // Push to modals management
        this.modals.push(modal)

        // If the modal we are adding is already in the DOM
        if (modal.modalRef) {
            ariaHidden(modal.modalRef, false)
        }

        const hiddenSiblingNodes = getHiddenSiblings(container)
        ariaHiddenSiblings(container, modal.mountNode, modal.modalRef, hiddenSiblingNodes, true)

        // Calculate current container index
        const containerIndex = findIndexOf(this.containers, (item) => item.container === container)
        
        // If container index is found,
        if (containerIndex !== -1) {
            // Push modal to managed container
            this.containers[containerIndex].modals.push(modal)

            // Return current modal index
            return modalIndex
        }

        // Push new container, since index was not found
        this.containers.push({
            modals: [modal],
            container,
            restore: null,
            hiddenSiblingNodes,
        })

        // Return current modal index
        return modalIndex
    }

    /**
     * Mount modal to proper container
     * 
     * @param {node} modal 
     * @param {object} props 
     */
    mount(modal, props) {
        // Get container index and info
        const containerIndex = findIndexOf(this.containers, (item) => item.modals.indexOf(modal) !== -1)
        const containerInfo = this.containers[containerIndex]

        // If not restoring container,
        if (!containerInfo.restore) {
            // Handle new container restoration
            containerInfo.restore = handleContainer(containerInfo, props)
        }
    }

    /**
     * Removes modal from manager
     * 
     * @param {node} modal 
     */
    remove(modal) {
        // Get modal index
        const modalIndex = this.modals.indexOf(modal)

        // If modal index not found,
        if (modalIndex === -1) {
            // Return that modal was not managed
            return modalIndex
        }

        // Get container index and info
        const containerIndex = findIndexOf(this.containers, (item) => item.modals.indexOf(modal) !== -1)
        const containerInfo = this.containers[containerIndex]

        // Remove modal from container
        containerInfo.modals.splice(containerInfo.modals.indexOf(modal), 1)
        this.modals.splice(modalIndex, 1)

        // If that was the last modal in a container, clean up the container.
        if (containerInfo.modals.length === 0) {
            // The modal might be closed before it had the chance to be mounted in the DOM.
            if (containerInfo.restore) {
                containerInfo.restore()
            }

            if (modal.modalRef) {
                // In case the modal wasn't in the DOM yet.
                ariaHidden(modal.modalRef, true)
            }

            ariaHiddenSiblings(
                containerInfo.container,
                modal.mountNode,
                modal.modalRef,
                containerInfo.hiddenSiblingNodes,
                false,
            )
            this.containers.splice(containerIndex, 1)
        } else {
            // Otherwise make sure the next top modal is visible to a screen reader.
            const nextTop = containerInfo.modals[containerInfo.modals.length - 1]
            // as soon as a modal is adding its modalRef is undefined. it can't set
            // aria-hidden because the dom element doesn't exist either
            // when modal was unmounted before modalRef gets null
            if (nextTop.modalRef) {
                ariaHidden(nextTop.modalRef, false)
            }
        }

        return modalIndex
    }

    /**
     * Get whether or not modal is on top of managed modals
     * 
     * @param {node} modal 
     */
    isTopModal(modal) {
        return this.modals.length > 0 && this.modals[this.modals.length - 1] === modal
    }
}

export {
    ModalManager
}

export default ModalManager
