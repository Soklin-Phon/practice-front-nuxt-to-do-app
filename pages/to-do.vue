<template>
    <v-container class="containers">
      <v-card flat width="1400" class="mx-auto">
        <v-row>
          <v-progress-linear v-show="isLoading" indeterminate color="green darken-2"></v-progress-linear>
        
          <v-col cols="12">
            <v-text-field outlined clearable label="Add task" v-model="newTask" type="text" @keypress.enter="addTask">
        
              <template v-slot:prepend>
                <v-tooltip bottom>
                  <template v-slot:activator="{ on }">
                    <v-icon v-on="on">
                      mdi-help-circle-outline
                    </v-icon>
                  </template>
                  Please add your tasks
                </v-tooltip>
              </template>
            </v-text-field>
          </v-col>
        </v-row>
        
        <v-list-item-group v-model="settings" multiple>
          <v-list-item v-for="item in tasks" :key="item.id">
            <template>
              <v-list-item-action>
                <v-tooltip bottom>
                  <template v-slot:activator="{ on }">
                    <v-btn icon v-on="on" @click.prevent="IsDone({ status: item.is_completed, id: item.id })">
                      <v-icon :color="item.is_completed ? 'red' : 'green'">mdi-check-circle</v-icon>
                    </v-btn>
                  </template>
                  Complete your task
                </v-tooltip>
        
              </v-list-item-action>
              <v-list-item-content
                  :class="item.is_completed ? 'text-decoration-line-through' : ''"
              >
                <v-list-item-title icon>{{ item.title }}</v-list-item-title>
              </v-list-item-content>
              <v-list-item-action>
                <div class="row">
                  <v-btn icon @click="getDialog(item)">
                    <v-icon color="blue lighten-1">mdi-account-edit</v-icon>
                  </v-btn>
                  <v-btn icon @click.prevent="deleteTask(item.id)">
                    <v-icon color="red lighten-1">mdi-delete-outline</v-icon>
                  </v-btn>
        
                </div>
        
              </v-list-item-action>
            </template>
          </v-list-item>
        </v-list-item-group>
        <FormModal v-model="openDialog" :propPackage="propPackage" @resResult="getResult($event)" />
    </v-card>
   </v-container>
   
</template>

<script>
import { mapState, mapActions, mapGetters } from "vuex";

import  FormModal  from './form_dialog/FormModal.vue'
export default {
  components: {
    FormModal
  },
  data() {
    return {
      message: 'Hey!',
      // isLoading: true,
      settings: [],
      items: [],
      newTask: '',
      id: 0,
      openDialog: false,
      propPackage: '',
      active: true,
      checkbox2: false,
      done: true

    }
  },
  computed: {
    ...mapState("task", ["tasks"]),
    ...mapGetters("task", ["isLoading",])

  },  

  mounted() {
    // API call
    // this.list();
    this.getTasks();


  },
  methods: {
    getDialog(val) {
      this.propPackage = val;
      this.openDialog = true;
    },

    onChange(val, id) {
      console.log(val)
      if (val === null || val.length === 0) { // Custom checks in this
        console.log('Unchecked', id)
      } else {
        console.log('Checked', id)
        return
      }
    },

    addTask() {
      this.addToTask({
        task: this.newTask
      });
      this.newTask = ''
    },
    ...mapActions("task", ["getTasks", "addToTask", "deleteTask", "IsDone"]),


    },


  
}
</script>