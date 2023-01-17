<template>
  <v-dialog v-model="show" width="500px" persistent>
      <v-card class="py-4">
        <v-card-title>
          <span class="text-h5">Update your task</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-row>
              <v-row>
                <v-col cols="12">
                  <v-text-field
                      type="text"
                      v-model="title"
                  ></v-text-field>
                </v-col>
              </v-row>
            </v-row>
          </v-container>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
            <v-btn
                color="blue darken-1"
                text
                @click="close">
                Close
              </v-btn>
              <v-btn
                color="blue darken-1"
                text
                @click="editTask">
              Save
            </v-btn>
        </v-card-actions>
      </v-card>
  </v-dialog>
</template>

<script>

// import {makePurchase} from '../../../service/purchase.service'

import { title } from 'process';

export default {
  
  props: {
    // The 'value' prop is the v-model of the component
    value:  Boolean,
    propPackage: {
      // type: Number,
      required: true,
      default: ''
    },
  },
  data: () => ({
    // Instead of trying to access the prop value on the data block
    // Set up a watcher for this prop, and do the value assignment there
    // selectPackage: this.propPackage,
    title: '',
    id: '',
    result: false
  }),  
  watch: {
    propPackage(val) {
      // Be sure to validate default values
      // this.fetchData()
      if(val !== '') {
        this.id = val.id;
        this.title = val.title;
      }
    }
  },
  computed: {
    // Configuring a computed property like this,
    // you can close the dialog from the child component
    // and avoid the mutation prop warning
    show: {
      get() {
        console.log("get value...", this.value);
          return this.value
        },
      set(value) {
          console.log("log...")
          let me = this
          me.$emit('input', value)
        }
    }
  },
  methods: {
    async editTask() {
      
      this.$store.dispatch('task/editTask', {id: this.id,title: this.title})
      this.show = false
      },
    close() {
      // It's okay to use $emit and set a @close event 
      // if you need to pass data to parent component
      //this.$emit("close", data);

      // But if not, with help of the computed property 'show' 
      // we can close the dialog from the child component
      // by just assign the value to false, since it's used
      // as the v-model of the component it also gets updated
      // on the parent component
      this.show = false
    },
  },
};
</script>