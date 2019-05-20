<template>
    <div id="new-employee">
        <div class="ui text container">
            <form @submit.prevent="saveEmployee" class="ui form">
                <div class="field">
                    <label>Employee ID</label>
                    <input type="number" v-model="employee_id" required placeholder="Employee ID">
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
import db from './firebaseInit';
export default {
    name : 'new-employee',
    data(){
        return{
            employee_id : null,
            name : null,
            dept : null,
            position : null
        }
    },
    methods : {
        saveEmployee(){
            db.collection('employees').add({
                employee_id : this.employee_id,
                name : this.name,
                dept : this.dept,
                position : this.position
            })
            .then(docRef => this.$router.push('/'))
            .catch(error => console.log(err));
        }
    }
}
</script>
