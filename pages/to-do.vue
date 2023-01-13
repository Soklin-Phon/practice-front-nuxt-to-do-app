<template>
    <v-container>
     <v-row>
               <v-progress-linear v-show="isLoading" indeterminate color="green darken-2"></v-progress-linear>
 
       <v-col cols="12">
         <v-text-field 
                       outlined clearable 
                       label="Add task" 
                       v-model="newTask" 
                       type="text"
                       @keypress.enter="addToCart">
                       
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
               <template  >
                 <v-list-item-action>
                   <!-- <v-checkbox :input-value="active" color="primary"></v-checkbox> -->
                  <v-checkbox  
                        v-model="item.completed" 
                         @change="onChange($event, item.id)"></v-checkbox>

                 </v-list-item-action>
                   <v-list-item-content>
                     <v-list-item-title icon @click="getDialog(item.id)">{{ item.title }}</v-list-item-title>
                   </v-list-item-content>
                  <v-list-item-action >
                    <div class="row">
                        <v-btn icon @click="getDialog(item.id)">
                          <v-icon color="blue lighten-1">mdi-account-edit</v-icon>
                        </v-btn>
                        <v-btn icon @click.stop="deleteTask(item.id)">
                          <v-icon color="red lighten-1">mdi-trash-can</v-icon>
                        </v-btn>

                    </div>

                  </v-list-item-action>
               </template>
             </v-list-item>
           </v-list-item-group>
   </v-container>
</template>

<script>
import { mapState, mapActions, mapGetters } from "vuex";

import { FormModal } from './form_dialog/FormModal.vue'
export default {
  components: {
    FormModal
  },
  data() {
    return {
      message: 'Hey!',
      isLoading: true,
      settings: [],
      items: [],
      newTask: '',
      id: 0,
      openDialog: true,
      propPackage: '',
      active: true,
      checkbox2: false

    }
  },
  computed: {
    ...mapState("task", ["tasks"]),
    // ...mapGetters("task", ["isLoading"])

  },

  mounted() {
    // API call
    // this.list();
    this.getTasks();


  },
  methods: {
    ...mapActions("task", ["getTasks"]),

    ...mapActions("task", ["addToTask"]),

    addToCart() {
      this.addToTask({
        task: this.newTask
      });
      this.newTask = ''
    },

    deleteTask(id) {
      let list = this.items.filter((el) => el.id !== id);
      this.items = list;
    },

    getDialog(val) {
      console.log("get dialog")
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
      }
  },
  
}
</script>