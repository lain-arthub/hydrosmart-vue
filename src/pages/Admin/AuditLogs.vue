<script setup>
import AdminDashboard from '../../components/AdminDashboard.vue';
import auditContent from '../../components/admin/audit-content.vue';

</script>

<template>
  <AdminDashboard title="Audit Logs" subtitle="Recent history of administrative activity">
     <auditContent></auditContent>
  </AdminDashboard>
</template>