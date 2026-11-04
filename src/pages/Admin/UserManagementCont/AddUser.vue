<script setup>
import AdminDashboard from '../../../components/AdminDashboard.vue';
import addUserContent from '../../../components/admin/user-management/add-user-content.vue';

</script>

<template>
  <AdminDashboard title="User Management" subtitle="Manage accounts, roles and access permissions">
     <addUserContent></addUserContent>
  </AdminDashboard>
</template>