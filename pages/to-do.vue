<template>
    <v-container>
     <v-row>
       <v-col cols="12">

         <v-text-field 
                       outlined clearable 
                       label="Add task" 
                       v-model="newTask" 
                       type="text"
                       @keypress.enter="addTask">
                       
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
             <v-list-item v-for="item in items" :key="item.id">
               <template v-slot:default="{ active, }">
                 <v-list-item-action>
                   <v-checkbox :input-value="active" color="primary"></v-checkbox>
                 </v-list-item-action>
                   <v-list-item-content>
                     <v-list-item-title icon @click="getDialog(item.id)">{{ item.title }}</v-list-item-title>
                     <v-text-field   v-show="setDisable(true)" label="Regular" placeholder="Placeholder"></v-text-field>
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
import FormModal from './form_dialog/FormModal.vue'
export default {
  components: {
    FormModal
  },
  data() {
    return {
      message: 'Hey!',
      loading: false,
      settings: [],
      items: [],
      newTask: '',
      id: 0,
      openDialog: false,
      propPackage: '',
    }
  },
  mounted() {
    // API call
    this.list();

  },
  methods: {
    addTask() {
      if (this.newTask) {
        this.$store.commit('ADD_TASK', this.newTask);
        this.items.push({ id: this.id++, title: this.newTask });
        console.log("add task", this.items)

        this.newTask = '';
      }
    },
    async list() {
      fetch('https://jsonplaceholder.typicode.com/todos')
        .then(response => response.json())
        .then(json => this.items = json)
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
  },
}
</script>