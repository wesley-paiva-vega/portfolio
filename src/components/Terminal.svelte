<script>
    import avatar from '../images/avatar.jpeg'

</script>

<div>
    <header>
        dev.bash
    </header>
    <div class="avatar">
        <img width="400px" src={avatar} alt="my foto">
        <main class='text' >
	    <h1>Hi, I'm Wesley</h1>
            <p>I'm a specialist
                <span><strong>Front-End web developer</strong></span>,
                with solid experience in the main <span class="green_text"><strong>frameworks on the market.</strong></span> Feel free to browse and discover my work.</p>
        </main>
    </div>
</div>

<style lang="scss">
    div {
        position: relative;
        margin: 0 auto;
        width: 850px;
        height: 450px;
        background-color: var(--color-bg-secondary);
        border-radius: 5px;

        header {
            background-color: var(--color-bg-primary);
            border: 1px solid var(--color-bg-secondary);
            padding: 2px 20px;
        }
    }

    .avatar {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        overflow-y: hidden;
        position: relative;
       img {
        clip-path: ellipse(140px 145px at 50% 40%);
        position: absolute;
        left: 0;
        top: calc(100px - 35%);
       }

       p {
        padding-right: 80px;
        font-size: 25px;
        color: var(--color-theme-3);
       }

       .text {        
        align-self: flex-end;
        text-align: center;
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 50%;

        h1 {
            padding-right: 80px;
            color: var(--color-theme-7);
        }

            span {
                color: var(--color-theme-4);
            }

            .green_text {
                color: var(--color-theme-5);
            }
       }
    }
</style>