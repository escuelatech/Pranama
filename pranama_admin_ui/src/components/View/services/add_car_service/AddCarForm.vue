<template>
  <div>
    <div v-show="isError">
      <Messagebar />
    </div>

    <form @submit.prevent="submitCarForm" v-show="!carRegistrationSuccessful">
      <h3>Vehicle Registration</h3>
      <div class="row gtr-uniform">
        <div class="col-6 col-12-xsmall">
          <input
            type="text"
            name="plateNumber"
            placeholder="Registration Plate Number"
            v-model="plateNumber"
            autocomplete="off"
            required
          />
          <span class="errorNotification" v-if="msge.plateNumber">{{
            msge.plateNumber
          }}</span>
        </div>
        <div class="col-6 col-12-xsmall">
          <input
            type="text"
            name="carOwner"
            placeholder="Name of the Car Owner"
            v-model="carOwner"
            autocomplete="off"
            required
          />
          <span class="errorNotification" v-if="msge.carOwner">{{
            msge.carOwner
          }}</span>
        </div>

        <div class="col-6 col-12-xsmall">
          <label for="car">Choose a Car Type</label>
          <select v-model="selectedCar">
            <option v-for="car in cars" :value="car" :key="car.carId">
              {{ car.carMake }}
            </option>
          </select>
        </div>
        <div class="col-6 col-12-xsmall">
          <label for="model" v-if="selectedCar">Choose the Model</label>
          <select v-model="selectedModel" v-if="selectedCar">
            <option
              v-for="model in selectedCar.carModels"
              :key="model"
              :value="model"
            >
              {{ model }}
            </option>
          </select>
        </div>

        <div class="col-6 col-12-xsmall">
          <input
            type="text"
            name="color"
            placeholder="Color of the Car"
            v-model="color"
            autocomplete="off"
            required
          />
          <span class="errorNotification" v-if="msge.color">{{
            msge.color
          }}</span>
        </div>
        <div class="form-check form-group">
          <select id="vehicle" name="vehicle">
            <option value="default">Choose the type of vehicle</option>
            <option value="suv">SUV</option>
            <option value="sedan">Sedan</option>
          </select>
          <span class="errorNotification" v-if="msge.vehicle">{{
            msge.vehicle
          }}</span>
        </div>
        <div class="col-6 col-12-xsmall">
          <input
            type="email"
            name="email"
            placeholder="Email"
            v-model="email"
            required
            autocomplete="off"
          />
          <span class="errorNotification" v-if="msge.email">{{
            msge.email
          }}</span>
        </div>
        <div class="col-6 col-12-xsmall">
          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            v-model="phone"
            autocomplete="off"
            required
          />
          <span class="errorNotification" v-if="msge.phone">{{
            msge.phone
          }}</span>
        </div>
        <div class="col-6 col-12-xsmall">
          <label>Upload car </label>
          <div
            class="base-image-input"
            :style="{ 'background-image': `url(${imageData})` }"
            @click="chooseImage"
          >
            <span v-if="!imageData" class="placeholder">
              <img
                height="100%"
                src="@/assets/images/car avatar2.png"
                alt="car avatar"
              />
            </span>
            <input
              class="file-input"
              ref="fileInput"
              type="file"
              @input="onSelectFile()"
            />
          </div>
        </div>
        <div class="col-12">
          <ul class="actions">
            <li>
              <input type="submit" value="Register" class="primary" />
            </li>
            <li>
              <input type="reset" value="Reset" />
            </li>
            <li>
              <input type="reset" value="Cancel" />
            </li>
          </ul>
        </div>
      </div>
    </form>
    <div v-show="carRegistrationSuccessful">
      <Messagebar />
    </div>
  </div>
</template>

<script>
import formService from "@/apiservices/formService.js";
import Messagebar from "@/components/View/common/Messagebar.vue";
export default {
  components: {
    Messagebar,
  },
  data() {
    return {
      plateNumber: "",
      carOwner: "",
      carMake: "",
      carModel: "",
      color: "",
      vehicle: "",
      phone: "",
      email: "",
      errorMessage: [],
      msge: [],
      carRegistrationSuccessful: false,
      isError: false,
      imageData: null,
      cars: [
        {
          carId: 1,
          carMake: "Toyota",
          carModels: [
            "Innova",
            "Glanza",
            "Yaris",
            "Vellfire",
            "Innova Crysta",
            "Fortuner",
            "Camry",
          ],
        },
        {
          carId: 2,
          carMake: "Maruti",
          carModels: [
            "Swift",
            "Baleno",
            "Dzire",
            "Vitara Brezza",
            "Wagon R",
            "Ertiga",
            "Alto 800",
            "Celerio",
            "S-Presso",
            "Ciaz",
            "S-Cross",
            "Ignis",
          ],
        },
        {
          carId: 3,
          carMake: "Honda",
          carModels: ["Civic", "City", "HR-V"],
        },
        {
          carId: 4,
          carMake: "Fiat",
          carModels: ["Linea", "Avventura", "Avventura Urban Cross"],
        },
        {
          carId: 5,
          carMake: "Renault",
          carModels: ["KWID", "Triber", "Duster", "Captur"],
        },
        {
          carId: 6,
          carMake: "Ford",
          carModels: [
            "Figo",
            "Aspire",
            "Mustang",
            "Fiesta",
            "EcoSport",
            "Explorer",
            "Escape",
            "Edge",
          ],
        },
        {
          carId: 7,
          carMake: "Hyundai",
          carModels: [
            "Elantra",
            "Venue",
            "Creta",
            "Elite i20",
            "Verna",
            "Grand i10",
            "Aura",
            "Santro",
            "Xcent",
            "Tucson",
          ],
        },
        {
          carId: 8,
          carMake: "Tata",
          carModels: [
            "Altroz",
            "Tiago",
            "Nexon",
            "Harrier",
            "Tigor",
            "Yodha Pickup",
          ],
        },
        {
          carId: 9,
          carMake: "Volkswagen",
          carModels: [
            "Polo",
            "Vento",
            "T-Roc",
            "Tiguan AllSpace",
            "Jetta",
            "Passat",
          ],
        },
        {
          carId: 10,
          carMake: "Skoda",
          carModels: ["Rapid", "Karoq", "Octavia"],
        },
        {
          carId: 11,
          carMake: "Mahindra",
          carModels: ["Scorpio", "Bolero", "XUV300", "Thar", "XUV500"],
        },
      ],
      selectedCar: null,
      selectedModel: null,
    };
  },
  watch: {
    plateNumber(value) {
      this.plateNumber = value;
      this.check_plateNumber(value);
    },
    carOwner(value) {
      this.carOwner = value;
      this.check_carOwner(value);
    },
    carMake(value) {
      this.carMake = value;
      this.check_carMake(value);
    },
    carModel(value) {
      this.carModel = value;
      this.check_carModel(value);
    },
    color(value) {
      this.color = value;
      this.check_color(value);
    },
    vehicle(value) {
      this.vehicle = value;
      this.check_vehicle(value);
    },
    email(value) {
      this.email = value;
      this.check_email(value);
    },
    phone(value) {
      this.phone = value;
      this.check_phone(value);
    },
  },
  methods: {
    submitCarForm() {
      formService
        .submitCarData({
          plateNumber: this.plateNumber,
          carOwner: this.carOwner,
          carMake: this.carMake,
          carModel: this.carModel,
          color: this.color,
          vehicle: this.vehicle,
          email: this.email,
          phone: this.phone,
        })
        .then((response) => {
          response.data;
          console.log(response);
          this.carRegistrationSuccessful = true;
          this.isError = false;
          this.$store.dispatch("addSuccessMessage");
        })
        .catch((error) => {
          console.log("Error reported from endpoints:" + error.response);
          this.displayMessage = true;
          this.isError = true;
          this.$store.dispatch("addErrorMessage");
          return (this.errorMessage = JSON.stringify(
            error.response.data.errorMessage
          ));
        });
    },
    chooseImage() {
      this.$refs.fileInput.click();
    },
    onSelectFile() {
      const input = this.$refs.fileInput;
      const files = input.files;
      if (files && files[0]) {
        const reader = new FileReader();
        reader.onload = (e) => {
          this.imageData = e.target.result;
        };
        reader.readAsDataURL(files[0]);
        this.$emit("input", files[0]);
      }
    },

    check_plateNumber(value) {
      if (value == "") {
        this.msge["plateNumber"] = "Enter Registration Plate Number";
      } else {
        this.msge["plateNumber"] = "";
      }
    },
    check_carOwner(value) {
      if (value == "") {
        this.msge["carOwner"] = "Enter Car Owner Name";
      } else {
        this.msge["carOwner"] = "";
      }
    },
    check_carMake(value) {
      if (value == "") {
        this.msge["carMake"] = "Enter Make of the Car";
      } else {
        this.msge["carMake"] = "";
      }
    },
    check_carModel(value) {
      if (value == "") {
        this.msge["carModel"] = "Enter Model of the Car";
      } else {
        this.msge["carModel"] = "";
      }
    },
    check_vehicle(value) {
      if (value == "") {
        this.msge["firstName"] = "Enter Vehicle Type";
      } else {
        this.msge["firstName"] = "";
      }
    },
    check_color(value) {
      if (value == "") {
        this.msge["color"] = "Enter Car Color";
      } else {
        this.msge["color"] = "";
      }
    },
    check_email(value) {
      // eslint-disable-next-line no-useless-escape
      if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value)) {
        this.msge["email"] = "";
      } else {
        this.msge["email"] = "Enter a valid email";
      }
    },
    check_phone(value) {
      if (value.length >= "10" && value.length <= "15") {
        this.msge["phone"] = " ";
      } else {
        this.msge["phone"] = "Enter your valid Mobile Number";
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.errorNotification {
  color: red;
}
</style>