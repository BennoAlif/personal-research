<template>
    <div id="dashboard">
        <h2 class="ui header">
            <router-link to="/new" exact class="ui blue animated button">
                <div class="hidden content">
                    Add
                </div>
                <div class="visible content">
                    <i class="plus icon"></i>
                </div>
            </router-link>
            <div class="content">
                Dashboard
            </div>
        </h2>
        <div class="ui container text">
            <div class="ui segment">
                <div class="ui relaxed divided list">
                    <div class="item" v-for="employee in employees" v-bind:key="employee.id">
                        <div class="content ui three column grid">
                            <div class="column">
                                <div class="header">{{ employee.name }}</div>
                                {{employee.position}}
                            </div>
                            <div class="column middle aligned">
                                <div class="floated content">
                                    <div class="ui horizontal label">{{employee.dept}}</div>
                                </div>
                            </div>
                            <div class="column middle aligned">
                                <div class="floated content">
                                    <router-link exact v-bind:to="{name : 'view-employee', params : {employee_id : employee.employee_id}}">
                                        <i class="eye icon"></i> Details
                                    </router-link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import db from './firebaseInit';
export default {
    name : 'dashboard',
    data(){
        return{
            employees : []
        }
    },
    created() {
        db.collection('employees').get().then(querySnapshot => {
            querySnapshot.forEach(doc => {
                const data = {
                    'id' : doc.id,
                    'employee_id' : doc.data().employee_id,
                    'name' : doc.data().name,
                    'dept' : doc.data().dept,
                    'position' : doc.data().position
                }
                this.employees.push(data)
            })
        })
        
    }
}
</script>

<style scoped>
h2{
    text-align: center;
}
</style>
