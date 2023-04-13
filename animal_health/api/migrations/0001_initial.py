# Generated by Django 4.2 on 2023-04-13 13:54

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Diseases',
            fields=[
                ('id', models.AutoField(primary_key=True, serialize=False)),
                ('name', models.CharField(max_length=100)),
                ('local_names', models.CharField(max_length=100)),
                ('other_livestock_affected', models.CharField(max_length=100)),
                ('transmission', models.TextField()),
                ('number_affected_in_herd', models.CharField(max_length=100)),
                ('death_rate', models.CharField(max_length=100)),
                ('predisposing_factors', models.TextField()),
                ('key_signs_of_the_disease', models.TextField()),
                ('other_signs', models.TextField()),
                ('prevention', models.TextField()),
            ],
        ),
    ]