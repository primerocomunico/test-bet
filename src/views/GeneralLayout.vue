<template>
  <v-container>
    <v-row>
      <v-col cols="8">
        <h1 class="mt-3" style="margin-bottom: -30px">COMPETITIONS</h1>
        <div v-for="(event, index) in eventsData" :key="index">
          <events :event="event" />
        </div>
      </v-col>
      <v-col cols="4">
        <h1 class="mt-3" style="margin-bottom: -23px">MY CHOICES</h1>
        <choices />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import Events from "../components/Events";
import Choices from "../components/Choices";
import { mapState } from "vuex";

export default {
  name: "GeneralLayout",
  components: {
    Events,
    Choices,
  },
  computed: {
    ...mapState(["eventsData"]),
  },
};
</script>