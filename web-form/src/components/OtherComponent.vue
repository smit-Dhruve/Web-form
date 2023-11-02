<template>
  <div class="other-component">
    <a-table :dataSource="dataSource" :columns="columns" bordered row-key="key" size="middle"></a-table>
  </div>
</template>

<script>
import { useStore } from 'vuex';

export default {
  name: 'OtherComponent',
  setup() {
    const store = useStore();
    
    const residentData = store.state.residentData;
    const addressData = store.state.addressData;
    
    const dataSource = [
      {
        key: 1,
        field: 'First Name',
        value: residentData.firstName,
      },
      {
        key: 2,
        field: 'Last Name',
        value: residentData.lastName,
      },
      {
        key: 3,
        field: 'Email',
        value: residentData.email,
      },
      {
        key: 4,
        field: 'Mobile',
        value: residentData.mobile,
      },
      {
        key: 6,
        field: 'Address Line 1',
        value: addressData.address1,
      },
      {
        key: 7,
        field: 'Address Line 2',
        value: addressData.address2,
      },
      {
        key: 8,
        field: 'City',
        value: addressData.city,
      },
      {
        key: 9,
        field: 'Pincode',
        value: addressData.pincode,
      },
      {
        key: 10,
        field: 'State',
        value: addressData.state,
      },
      {
        key: 11,
        field: 'Country',
        value: addressData.country,
      },
    ];

    // Define columns for the table
    const columns = [
      {
        title: 'Field',
        dataIndex: 'field',
        key: 'field',
      },
      {
        title: 'Value',
        dataIndex: 'value',
        key: 'value',
      },
    ];

    return { dataSource, columns };
  },
};
</script>

<style scoped>
.other-component {
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 5px;
  background-color: #f9f9f9;
}
</style>
