<template>
  <div>
    <v-alert v-if="betData.length === 0" dense type="warning" class="mt-10">
      <h3>NOT bet choose</h3>
    </v-alert>
    <v-card v-else class="mx-auto mt-10" max-width="400">
      <v-img
        class="white--text align-end"
        height="200px"
        src="https://cdn.pixabay.com/photo/2016/11/29/02/05/audience-1866738_960_720.jpg"
      >
        <v-card-title>{{ eventData.label }}</v-card-title>
      </v-img>

      <v-card-subtitle class="pb-1"> Qui va gagner le match ? </v-card-subtitle>

      <v-card-text v-for="(bet, i) in betData" :key="i" class="text--primary">
        <v-row>
          <v-col>
            <span>{{ bet.actor.label }}</span>
          </v-col>
          <v-col>
            <p class="text-right">{{ bet.odd }}</p>
          </v-col>
        </v-row>
      </v-card-text>

      <v-divider class="ma-3"></v-divider>

      <v-card-actions>
        <span>Amount</span>
        <v-spacer></v-spacer>
        <v-btn @click="lessAmount" class="mx-2" fab dark small color="primary">
          <v-icon dark> mdi-minus </v-icon>
        </v-btn>
        <span>{{ Number(amount).toFixed(2) }}</span>
        <v-btn @click="addAmount" class="mx-2" fab dark small color="primary">
          <v-icon dark> mdi-plus </v-icon>
        </v-btn>
      </v-card-actions>

      <v-divider class="ma-3"></v-divider>

      <v-card-text>
        <v-row>
          <v-col>
            <span>Total</span>
          </v-col>
          <v-col>
            <p class="text-right">{{ Number(calculateTotalBet).toFixed(2) }}</p>
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <span>Potential Gain</span>
          </v-col>
          <v-col>
            <p class="text-right">{{ calculatePotentialGain }}</p>
          </v-col>
        </v-row>
      </v-card-text>

      <v-card-actions>
        <div class="text-right ma-2" style="margin-bottom: 100px">
          <v-btn color="green" class="text-center white--text">
            Submit Bets
          </v-btn>
        </div>
      </v-card-actions>
    </v-card>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "Choices",
  data() {
    return {
      amount: 0,
      totalBet: 0,
    };
  },
  watch: {
    betData(value) {
      if (value.length === 0) this.amount = 0;
    },
  },
  computed: {
    ...mapState(["betData", "eventData"]),
    calculateTotalBet() {
      let arrOdds = [];
      this.betData.forEach((bet) => {
        arrOdds.push(bet.odd);
      });
      const reducer = (accumulator, currentValue) => accumulator + currentValue;
      return arrOdds.reduce(reducer);
    },
    calculatePotentialGain() {
      return Number(this.amount + this.calculateTotalBet).toFixed(2);
    },
  },
  methods: {
    addAmount() {
      this.amount++;
    },
    lessAmount() {
      this.amount--;
    },
  },
};
</script>