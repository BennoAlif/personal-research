<template>
    <div id="view-employee">
        <div class="ui centered card">
            <div class="image">
                <img src="https://semantic-ui.com/images/avatar2/large/kristy.png">
            </div>
            <div class="content">
                <h2 class="header">{{name}}</h2>
                <div class="description">
                {{position}}
                </div>
            </div>
            <div class="extra content">
                <div class="ui green horizontal label">{{dept}}</div>
            </div>
        </div>
            <div class="ui grid two column">
                <div class="column">
                    <router-link v-bind:to="{name : 'edit-employee', params: {employee_id:employee_id}}" class="ui blue animated button right floated" tabindex="0">
                        <div class="visible content">
                            <i class="pencil icon"></i>
                        </div>
                        <div class="hidden content">
                            Edit
                        </div>
                    </router-link>
                </div>
                <div class="column">
                    <div @click="deleteEmployee" class="ui red animated button" tabindex="0">
                        <div class="visible content">
                            <i class="eraser icon"></i>
                        </div>
                        <div class="hidden content">
                            Delete
                        </div>
                    </div>
                </div>
            </div>
    </div>
</template>

<script>
import db from './firebaseInit'
export default {
    name : 'view-employee',
    data(){
        return{
            employee_id : null,
            name : null,
            dept : null,
            position : null
        }
    },
    beforeRouteEnter(to, from, next){
        db.collection('employees').where('employee_id', '==', to.params.employee_id).get()
        .then(querySnapshot => {
            querySnapshot.forEach(doc => {
                next(vm => {
                    vm.employee_id = doc.data().employee_id
                    vm.name = doc.data().name
                    vm.dept = doc.data().dept
                    vm.position = doc.data().position
                })
            })
        })
    },
    watch : {
        '$route' : 'fetchData'
    },
    methods: {
        fetchData(){
            db.collection('employees').where('employee_id', '==', this.$route.params.employee_id).get()
                .then(querySnapshot => {
                    querySnapshot.forEach(doc => {
                        this.employee_id = doc.data().employee_id
                        this.name = doc.data().name
                        this.dept = doc.data().dept
                        this.position = doc.data().position
                    })
                })
        },
        deleteEmployee(){
            if (confirm('Beneran mau dihapus?')) {
                
            db.collection('employees').where('employee_id', '==', this.$route.params.employee_id).get()
                .then(querySnapshot => {
                    querySnapshot.forEach(doc => {
                        doc.ref.delete()
                        this.$router.push('/')
                    })
                })
            }
        }
    }
}
</script>


<style scoped>

</style>
