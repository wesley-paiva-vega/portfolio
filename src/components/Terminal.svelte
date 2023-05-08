<script>
    import avatar from '../images/avatar.jpeg'

</script>

<div>
    <header>
        dev.bash
    </header>
    <div class="terminal">
        <div class="avatar">
            <img width="550px" src={avatar} alt="my foto">
        </div>
        <p>I'm an expert frontend engineer with experience in many different tools. Here you can check out my career in more detail.</p>
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

    .terminal {
        display: flex;
        
        background-color: red;
    }

    .avatar {
        width: 200px;
        padding-top: 150px;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: red;
        clip-path: circle(45%);
    }
</style>