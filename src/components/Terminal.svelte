<script>
    import avatar from '../images/avatar.jpeg'

</script>

<div>
    <header>
        dev.bash
    </header>
    <div class="avatar">
        My Foto here
        <img width="400px" src={avatar} alt="my foto">
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
        background-color: lightblue;
       img {
        clip-path: ellipse(150px 150px at 50% 40%);
       }
    }
</style>