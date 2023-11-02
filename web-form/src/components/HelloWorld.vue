<template >
  <div class="web-form__main-container">
    <div class="web-form__form">
      <div class="form-title">Let’s start with your basic details</div>
      <a-form class="web-form__ant_form">
        <div class="web-form__section">
          <div class="web-form__section-body">
            <a-row :gutter="[8]">
              <a-col class="gutter-row" :span="12">
                <a-form-item v-bind="validateResidentFormInfos.firstName">
                  <a-input placeholder="First Name" v-model:value="resident.firstName" />
                </a-form-item>
              </a-col>
              <a-col class="gutter-row" :span="12">
                <a-form-item v-bind="validateResidentFormInfos.lastName">
                  <a-input placeholder="Last Name" v-model:value="resident.lastName" />
                </a-form-item>
              </a-col>
              <a-col class="gutter-row" :span="12">
                <a-form-item v-bind="validateResidentFormInfos.email">
                  <a-input placeholder="Email Address" v-model:value="resident.email" />
                </a-form-item>
              </a-col>
              <a-col class="gutter-row" :span="12">
                <a-form-item v-bind="validateResidentFormInfos.mobile">
                  <a-input addonBefore="+91" placeholder="Mobile Number" v-model:value="resident.mobile" :maxlength="10"
                    @keypress="onlyNumber" />
                </a-form-item>
              </a-col>
            </a-row>
          </div>
        </div>
      </a-form>
      <a-form>
        <div class="web-form__section">
          <div class="web-form__section-title">Please provide address</div>
          <div class="web-form__section-body">
            <a-row :gutter="[16]">
              <a-col class="gutter-row" :span="12">
                <a-form-item v-bind="validateAddressFormInfos.address1">
                  <a-input placeholder="Address Line 1" v-model:value="address.address1" />
                </a-form-item>
              </a-col>
              <a-col class="gutter-row" :span="12">
                <a-form-item v-bind="validateAddressFormInfos.address2">
                  <a-input placeholder="Address Line 2" v-model:value="address.address2" />
                </a-form-item>
              </a-col>
              <a-col class="gutter-row" :span="12">
                <a-form-item v-bind="validateAddressFormInfos.city">
                  <a-input v-model:value="address.city" placeholder="City" />
                </a-form-item>
              </a-col>
              <a-col class="gutter-row" :span="12">
                <a-form-item v-bind="validateAddressFormInfos.pincode">
                  <a-input placeholder="Pincode" v-model:value="address.pincode" @keypress="onlyNumber" :maxlength="6" />
                </a-form-item>
              </a-col>
              <a-col class="gutter-row" :span="12">
                <a-form-item v-bind="validateAddressFormInfos.state">
                  <a-select class="input-state" placeholder="State" v-model:value="address.state"
                    :options="stateList.map((state) => ({ label: state, value: state }))" show-search></a-select>
                </a-form-item>
              </a-col>
              <a-col class="gutter-row" :span="12">
                <a-form-item v-bind="validateAddressFormInfos.country">
                  <a-input placeholder="Country" v-model:value="address.country" />
                </a-form-item>
              </a-col>
            </a-row>
          </div>
        </div>
      </a-form>
      <a-button type="primary" @click="onClickSubmit">Submit</a-button>
    </div>
  </div>
</template>
<script setup>
/* eslint-disable */
import { Form } from 'ant-design-vue';
import { reactive } from 'vue';
import { useStore } from 'vuex';
import { useRouter } from 'vue-router';

const store = useStore();
const router = useRouter();


const { useForm } = Form;
const resident = reactive({
  firstName: '',
  lastName: '',
  email: '',
  mobile: '',
});
const address = reactive({
  address1: '',
  address2: '',
  city: '',
  pincode: '',
  state: '' || undefined,
  country: 'India',
});
const residentRules = reactive({
  firstName: [
    {
      required: true,
      message: 'Please enter first name',
    },
  ],
  lastName: [
    {
      required: true,
      message: 'Please enter last name',
    },
  ],
  email: [
    {
      type: 'email',
      required: true,
      message: 'Email Address is required',
    },
  ],
  mobile: [
    {
      required: true,
      message: 'Mobile number is mandatory',
    },
    {
      min: 10,
      pattern: new RegExp(/^[6-9]\d{9}$/),
      message: 'Mobile number is invalid',
    },
  ],
  pan: [
    {
      required: true,
      message: 'Please enter a valid PAN number',
      pattern: new RegExp(/^([A-Z]){5}([0-9]){4}([A-Z]){1}?$/),
    },
  ],
});
const stateList = [
  'Andhra Pradesh',
  'Arunachal Pradesh',
  'Assam',
  'Bihar',
  'Chhattisgarh',
  'Goa',
  'Gujarat',
  'Haryana',
  'Himachal Pradesh',
  'Jharkhand',
  'Karnataka',
  'Kerala',
  'Madhya Pradesh',
  'Maharashtra',
  'Manipur',
  'Meghalaya',
  'Mizoram',
  'Nagaland',
  'Odisha',
  'Punjab',
  'Rajasthan',
  'Sikkim',
  'Tamil Nadu',
  'Telangana',
  'Tripura',
  'Uttar Pradesh',
  'Uttarakhand',
  'West Bengal',
];

const addressRules = reactive({
  address1: [
    {
      required: true,
      message: 'Please enter address line 1',
    },
  ],
  address2: [
    {
      required: true,
      message: 'Address Line 2 is required',
    },
  ],
  city: [
    {
      required: true,
      message: 'City is required',
    },
  ],
  pincode: [
    {
      required: true,
      // message: 'Pincode is required',
      trigger: 'change',
    },
  ],
  state: [
    {
      required: true,
      message: 'State is required',
    },
  ],
  country: [
    {
      required: true,
      message: 'Country is required',
    },
  ],
});


const {
  validate: validateResidentForm,
  validateInfos: validateResidentFormInfos,
} = useForm(resident, residentRules);

const {
  validate: validateAddressForm,
  validateInfos: validateAddressFormInfos,
} = useForm(address, addressRules);

const onClickSubmit = async () => {
  const isValid = await Promise.all([validateResidentForm(), validateAddressForm()]);

  if (isValid.every((validation) => validation)) {
    store.commit('SAVE_RESIDENT_DATA', resident);
    store.commit('SAVE_ADDRESS_DATA', address);
    router.push({ name: 'OtherComponent' }); // Use the name of the route
  }
};

</script>
<style >
@import './Details.less';
</style>