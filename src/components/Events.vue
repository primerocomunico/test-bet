<template>
  <v-card :loading="loading" class="mx-auto my-12" max-width="100%">
    <v-img
      height="100px"
      src="https://cdn.pixabay.com/photo/2016/11/29/02/05/audience-1866738_960_720.jpg"
    >
      <v-app-bar flat color="rgba(0, 0, 0, 0)">
        <v-icon large color="grey lighten-2" class="mr-2"> mdi-trophy </v-icon>

        <v-toolbar-title class="title white--text pl-0">
          {{ event.sport.label }} / {{ event.category.label }} /
          {{ event.competition.label }}
        </v-toolbar-title>

        <v-spacer></v-spacer>
      </v-app-bar>
    </v-img>

    <v-icon large color="grey lighten-2" class="ma-2">
      {{ `mdi-${event.sport.icon}` }}
    </v-icon>
    <span v-if="event.label">{{ event.label }}</span>
    <span v-else>Data not available</span>

    <v-divider class="mx-4"></v-divider>

    <v-card-text>
      <span class="mr-6">{{ formDate }}</span>

      <v-btn
        v-for="(bet, i) in bets"
        :key="i"
        class="ma-2 text-right"
        :class="bet.active ? 'white--text' : null"
        :outlined="bet.active ? false : true"
        :color="bet.active ? 'green' : 'indigo'"
        @click.native="addBet(bet, i)"
      >
        <div v-show="hide">
          {{ i === activeItem }}
        </div>
        {{ bet.actor.label }} / {{ bet.odd }}
      </v-btn>
    </v-card-text>
  </v-card>
</template>

<script>
import moment from "moment";
import { mapMutations } from "vuex";

export default {
  name: "Events",
  data() {
    return {
      loading: false,
      selection: 1,
      betIds: null,
      bets: [],
      questions: [],
      activeItem: [],
      hide: false,
    };
  },
  props: {
    event: {
      type: Object,
      default: () => {},
    },
  },
  mounted() {
    this.getBet();
  },
  computed: {
    formDate() {
      return moment(String(this.event.start)).format("MM/DD/YYYY hh:mm");
    },
  },
  methods: {
    ...mapMutations(["setChoiseData", "delChoiseData", "setEventData"]),
    reserve() {
      this.loading = true;
      setTimeout(() => (this.loading = false), 2000);
    },
    getBet() {
      for (const property in this.event) {
        if (property === "bet") {
          const betIds = Object.keys(this.event[property])[0];
          this.bets = this.event.bet[betIds].choices;
        }
      }
    },
    addBet(bet, index) {
      if (!bet.active) {
        bet.active = true;
        this.activeItem.push(index);
        this.setChoiseData(bet);
        this.setEventData(this.event);
      } else {
        bet.active = false;
        const delIndex = this.activeItem.indexOf(index);
        if (delIndex > -1) {
          this.activeItem.splice(index, 1);
        }
        this.delChoiseData(bet);
      }
    },
  },
};
</script>