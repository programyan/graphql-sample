Sequel.migration do
  change do
    create_table :users do
      column :id, 'uuid', primary_key: true
      String :email, null: false
    end

    create_table :requests do
      column :id, 'uuid', primary_key: true
      foreign_key :user_id, :users, null: false, type: 'uuid'
      String :description, null: false
      String :details
      Boolean :paused, null: false, default: false
    end
  end
end
