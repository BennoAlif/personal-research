<template>
    <div id="edit-employee">
        <div class="ui text container">
            <form @submit.prevent="editEmployee" class="ui form">
                <div class="field">
                    <label>Employee ID</label>
                    <input type="text" disabled v-model="employee_id" required placeholder="Employee ID">
                </div>
                <div class="field">
                    <label>Name</label>
                    <input type="text" v-model="name" required placeholder="Name">                    
                </div>
                <div class="field">
                    <label>Department</label>
                    <input type="text" v-model="dept" required placeholder="Department">                    
                </div>
                <div class="field">
                    <label>Position</label>
                    <input type="text" v-model="position" required placeholder="Position">                    
                </div>
                <button class="ui green button" type="submit">Submit</button>
            </form>
        </div>
    </div>
</template>

<script>
import db from './firebaseInit'
export default {
    name : 'edit-employee',
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
        editEmployee(){
            db.collection('employees').where('employee_id', '==', this.$route.params.employee_id).get()
                .then(querySnapshot => {
                    querySnapshot.forEach(doc => {
                        doc.ref.update({
                            employee_id : this.employee_id,
                            name : this.name,
                            dept : this.dept,
                            position : this.position
                        })
                        .then(()=>{
                            this.$router.push({name: 'view-employee', params:{employee_id : this.employee_id}})
                        })
                    })
                })
        }
    }
}
</script>
