<script>
  export default {
    name: 'modal',

    methods: {
      close() {
        this.$emit('close');
      },
    },
  };
</script>

<template>
<transition name="modal-fade">
  <div class="modal-backdrop">
    <div class="modal">
      <header class="modal-header">
        <slot name="header">
          Please try again. 
          <br>
          The expense field is required 
          <br>
          It should also be between 1 and 99
          <button
            type="button"
            class="btn-close"
            @click="close"
          >
            x
          </button>
        </slot>
      </header>
    </div>
  </div>
  </transition>
</template>

<style>
  .modal-backdrop {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgba(0, 0, 0, 0.3);
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .modal {
    background: #FFFFFF;
    box-shadow: 2px 2px 20px 1px;
    overflow-x: auto;
    display: flex;
    flex-direction: column;
  }

  .modal-header,
  .modal-footer {
    padding: 20px;
    display: flex;
    text-align: center;
  }

  .modal-header {
    border-bottom: 1px solid #eeeeee;
    color: #4AAE9B;
    justify-content: space-between;
  }

  .modal-footer {
    border-top: 1px solid #eeeeee;
    justify-content: flex-end;
  }

  .modal-body {
    position: relative;
    padding: 20px 10px;
  }

  .btn-close {
    border: none;
    font-size: 20px;
    padding: 10px;
    margin-left: 10px;
    cursor: pointer;
    font-weight: bold;
    color: rgb(237, 8, 69);
    background: transparent;
  }

.modal-fade-enter,
  .modal-fade-leave-active {
    opacity: 0;
  }

  .modal-fade-enter-active,
  .modal-fade-leave-active {
    transition: opacity .5s ease
  }
</style>
