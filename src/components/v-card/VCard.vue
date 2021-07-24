<template>
    <div class="card">
        <div class="card-top">
            <div class="card-price">{{ ticket.price }} Р</div>
            <img class="card-icon" :src="image" alt="" />
        </div>
        <div class="card-content">
            <div class="card-content-blocks">
                <div class="card-content-block">
                    <div class="card-content-item">
                        <div class="card-content__title">{{ ticket.segments[0].origin }} – {{ ticket.segments[0].destination }}</div>
                        <div class="card-content__time">
                            {{ getTime(ticket.segments[0].date) }} –
                            {{ resultTime(ticket.segments[0].date, ticket.segments[0].duration) }}
                        </div>
                    </div>
                    <div class="card-content-item">
                        <div class="card-content__title">{{ ticket.segments[1].origin }} – {{ ticket.segments[1].destination }}</div>
                        <div class="card-content__time">
                            {{ getTime(ticket.segments[1].date) }} –
                            {{ resultTime(ticket.segments[1].date, ticket.segments[1].duration, ) }}
                        </div>
                    </div>
                </div>

                <div class="card-content-block">
                    <div class="card-content-item">
                        <div class="card-content__title">В ПУТИ</div>
                        <div class="card-content__time">{{ convertTime(ticket.segments[0].duration) }}</div>
                    </div>
                    <div class="card-content-item">
                        <div class="card-content__title">В ПУТИ</div>
                        <div class="card-content__time">{{ convertTime(ticket.segments[1].duration) }}</div>
                    </div>
                </div>

                <div class="card-content-block">
                    <div class="card-content-item">
                        <div v-if="ticket.segments[0].stops.length > 0">
                            <div class="card-content__title">
                                {{ticket.segments[0].stops.length}} ПЕРЕСАДК{{insertSymbol(ticket.segments[0].stops.length, "А" , "И")}}
                            </div>
                            <div class="card-content__time">{{getStops(ticket.segments[0].stops)}}</div>
                        </div>
                        <div v-else>
                            <div  class="card-content__title">БЕЗ ПЕРЕСАДОК</div>
                        </div>
                    </div>

                    <div class="card-content-item">
                        <div v-if="ticket.segments[1].stops.length > 0">
                            <div class="card-content__title">
                                {{ticket.segments[1].stops.length}} ПЕРЕСАДК{{insertSymbol(ticket.segments[1].stops.length, "А" , "И")}}
                            </div>
                            <div class="card-content__time">{{getStops(ticket.segments[1].stops)}}</div>
                        </div>
                        <div v-else>
                            <div  class="card-content__title">БЕЗ ПЕРЕСАДОК</div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </div>
</template>

<script>
import cardMixin from "@/mixins/cardMixin";
import image from "@/assets/S7_Logo.png";

export default {
    props: {
        ticket: {
            type: Object,
        },
    },
    mixins: [cardMixin],
    data: () => ({
        image,
    }),
};
</script>

<style lang="scss" scoped>
.card {
    background: #fff;
    border-radius: 6px;
    padding: 15px 20px;
    box-shadow: 0px 3px 4px rgba(#000, 0.1);

    &-top {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    &-price {
        font-size: 1.5rem;
        color: #2196f3;
    }

    &-icon {
        max-width: 100%;
    }

    &-content {
        &-blocks {
            display: flex;
        }

        &-block {
            margin-top: 15px;
            min-width: 35%;
        }

        &-item {
            font-weight: bold;
            line-height: 1.7;

            &:not(:last-child) {
                margin-bottom: 10px;
            }
        }

        &__title {
            font-size: 0.8rem;
            color: #a0b0b9;
        }

        &__time {
            font-size: 0.9rem;
            letter-spacing: 0px;
        }
    }
}
</style>
